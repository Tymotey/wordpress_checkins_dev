import { useState } from "react";
import { createRoot } from "@wordpress/element";
import FormsForm from "./elements/formsForm";
import "./style.scss";

const domNode = document.getElementById("btdev_inscriere_edit_form");
const root = createRoot(domNode);
root.render(<FormsForm />);
