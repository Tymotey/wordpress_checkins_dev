import { useState, useEffect, useRef } from "react";

export default function FormsForm() {
    const settingsTextarea = useRef(
        document.getElementById("btdev_forms_post_content")
    );

    const [settings, setSettings] = useState(JSON.parse(settingsTextarea.current.value));

    useEffect(() => {
        settingsTextarea.current.value = JSON.stringify(settings);
    }, [settings]);

    return (
        <div>
            
        </div>
    );
}
