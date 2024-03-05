<?php

namespace BTDEV_INSCRIERI\Classes;

use BTDEV_INSCRIERI\Traits\Utils as BTDEV_INSCRIERI_UTILS;

class SubmissionDb
{
    use BTDEV_INSCRIERI_UTILS;

    public $form = null;
    public $table_submissions = null;
    public $table_entries = null;
    public $table_checkins = null;
    public $sql = [
        'select' => ['*'],
        'where' => [],
        'order_by' => [],
        'group_by' => [],
        'limit' => 10,
        'offset' => 0,
    ];

    public function __construct($form = null)
    {
        $this->table_submissions = $this->utils_get_db_tables('submission');
        $this->table_checkins = $this->utils_get_db_tables('checkins');

        if (!is_object($form)) {
            if (is_int($form)) {
                global $wpdb;
                $sql = "SELECT form_name FROM " . $this->table_submissions . " WHERE id_submission = " . $form;
                $form = $wpdb->get_var($sql);
            }

            $classname = 'BTDEV_INSCRIERI\\Forms\\Data' . ucfirst($form);
            $form_class = new $classname();
            $this->form = $form_class;
        } else {
            $this->form = $form;
        }

        $this->table_entries = $this->utils_get_db_tables('entry_form', $this->form->name);
    }

    // SQL Parameters
    public function generate_sql_from_post($data, $table = null)
    {
        // Limits
        if (isset($data['start'])) {
            $this->set_sql_param('offset', $data['start']);
        }
        if (isset($data['length'])) {
            $this->set_sql_param('limit', $data['length']);
        }

        // Order by
        if (isset($data['order'])) {
            foreach ($data['order'] as $i => $order) {
                $this->set_sql_param('order_by', [$data['columns'][$order['column']]['name'], strtoupper($order['dir'])]);
            }
        }

        // Search
        if (isset($data['search']) && isset($data['search']['value']) && $data['search']['value'] !== '') {
            $search_fields = [];

            $searchable = [];
            $fields = $table->get_fields();
            foreach ($fields as $k_f => $field) {
                if (
                    !isset($field['settings_sql']['searchable']) ||
                    (isset($field['settings_sql']['searchable']) && $field['settings_sql']['searchable'] === true)
                ) {
                    $searchable[] = "e." . $k_f . " LIKE '%" . $data['search']['value'] . "%'";
                }
            }

            $this->set_sql_param('where', '(' . implode(' OR ', $searchable) . ')');
        }

        // Custom data
        if (isset($data['custom_data'])) {
            if (isset($data['custom_data']['payment_status'])) {
                $this->set_sql_param('where', "s.payment_status='" . $_POST['custom_data']['payment_status'] . "'");
            }
        }
    }

    public function set_sql_param($param, $value)
    {
        if (in_array($param, ['limit', 'offset'])) {
            $this->sql[$param] = $value;
        } else {
            $this->sql[$param][] = $value;
        }
    }

    public function prepare_sql_param($param)
    {
        if (in_array($param, ['limit', 'offset'])) {
            if ($this->sql['limit'] !== '-1') {
                $add = ' LIMIT ';
                if ($param === 'offset') {
                    $add = ' OFFSET ';
                }
                return $add . $this->sql[$param];
            } else {
                return '';
            }
        } else if (in_array($param, ['select', 'order_by', 'where'])) {
            if (count($this->sql[$param]) > 0) {
                if ($param === 'select') {
                    return implode(', ', $this->sql[$param]);
                } else if (in_array($param, ['order_by'])) {
                    $return_val = [];
                    foreach ($this->sql[$param] as $order_by) {
                        $return_val[] = $order_by[0] . ' ' . $order_by[1];
                    }

                    return ' ORDER BY ' . implode(', ', $return_val);
                } else if (in_array($param, ['where'])) {
                    return ' WHERE ' . implode(' AND ', $this->sql[$param]);
                }
            } else {
                return $this->sql[$param];
            }
        }
    }

    // Checkins
    public function get_checkins_count()
    {
        global $wpdb;

        $sql = "SELECT COUNT(*) AS count FROM " . $this->table_entries . " AS e LEFT JOIN " . $this->table_submissions . " AS s ON e.id_submission = s.id_submission LEFT JOIN " . $this->table_checkins . " AS c ON e.id_entry = c.id_entry" . $this->prepare_sql_param('where') . $this->prepare_sql_param('group_by');
        $entries_count = $wpdb->get_var($sql);

        return $entries_count;
    }

    public function get_checkins()
    {
        global $wpdb;

        $sql = "SELECT " . $this->prepare_sql_param('select') . " FROM " . $this->table_entries . " AS e LEFT JOIN " . $this->table_submissions . " AS s ON e.id_submission = s.id_submission LEFT JOIN " . $this->table_checkins . " AS c ON e.id_entry = c.id_entry" . $this->prepare_sql_param('where') . $this->prepare_sql_param('order_by') . $this->prepare_sql_param('group_by') . $this->prepare_sql_param('limit') . $this->prepare_sql_param('offset');

        $entries = $wpdb->get_results($sql, ARRAY_A);

        if ($entries !== null) {
            return $entries;
        } else {
            return false;
        }
    }

    // Submissions
    public function get_submissions_count()
    {
        global $wpdb;

        $sql = "SELECT COUNT(*) AS count FROM " . $this->table_submissions . " AS s " . $this->prepare_sql_param('where') . $this->prepare_sql_param('group_by');
        $entries_count = $wpdb->get_var($sql);

        return $entries_count;
    }

    public function get_submissions()
    {
        global $wpdb;

        $sql = "SELECT " . $this->prepare_sql_param('select') . " FROM " . $this->table_submissions . " AS s" . $this->prepare_sql_param('where') . $this->prepare_sql_param('order_by') . $this->prepare_sql_param('group_by') . $this->prepare_sql_param('limit') . $this->prepare_sql_param('offset');
        $entries = $wpdb->get_results($sql, ARRAY_A);

        if ($entries !== null) {
            return $entries;
        } else {
            return false;
        }
    }

    public function cancel_submission($id_submission)
    {
        global $wpdb;

        $updated = $wpdb->update($this->table_submissions, ['payment_status' => 'canceled_by_us'], ['id_submission' => $id_submission]);

        if ($updated !== false) {
            return true;
        } else {
            return false;
        }
    }

    public function delete_submission($id_submission)
    {
        global $wpdb;

        $deleted = $wpdb->delete($this->table_submissions, ['id_submission' => $id_submission]);

        if ($deleted !== false) {
            return true;
        } else {
            return false;
        }
    }

    // Entries
    public function get_entries_count()
    {
        global $wpdb;

        $sql = "SELECT COUNT(*) AS count FROM " . $this->table_entries . " AS e LEFT JOIN " . $this->table_submissions . " AS s ON e.id_submission = s.id_submission" . $this->prepare_sql_param('where') . $this->prepare_sql_param('group_by');
        $entries_count = $wpdb->get_var($sql);

        return $entries_count;
    }

    public function get_entries()
    {
        global $wpdb;

        $sql = "SELECT " . $this->prepare_sql_param('select') . " FROM " . $this->table_entries . " AS e LEFT JOIN " . $this->table_submissions . " AS s ON e.id_submission = s.id_submission" . $this->prepare_sql_param('where') . $this->prepare_sql_param('order_by') . $this->prepare_sql_param('group_by') . $this->prepare_sql_param('limit') . $this->prepare_sql_param('offset');

        $entries = $wpdb->get_results($sql, ARRAY_A);

        if ($entries !== null) {
            return $entries;
        } else {
            return false;
        }
    }

    public function delete_entry($id_entry)
    {
        global $wpdb;

        $deleted = $wpdb->delete($this->table_entries, array('id_entry' => $id_entry));

        if ($deleted !== false) {
            return true;
        } else {
            return false;
        }
    }
    public function delete_entries($id_submission)
    {
        global $wpdb;

        $deleted = $wpdb->delete($this->table_submissions, array('id_submission' => $id_submission));

        if ($deleted !== false) {
            return true;
        } else {
            return false;
        }
    }
}
