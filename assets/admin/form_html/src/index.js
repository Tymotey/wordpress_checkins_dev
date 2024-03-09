import { useState } from "react";
import { createRoot } from "@wordpress/element";
import FormsForm from "./elements/formsForm";
import "./index.scss";

const domNode = document.getElementById("btdev-inscriere-edit-form");
if (domNode) {
    const root = createRoot(domNode);
    root.render(<FormsForm />);
}
