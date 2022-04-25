/**
 * This file was generated from NativeSelectableText.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface NativeSelectableTextProps<Style> {
    name: string;
    style: Style[];
    source: DynamicValue<string>;
    substringAttr: EditableValue<string>;
    selectionStart: EditableValue<Big>;
    selectionEnd: EditableValue<Big>;
    textColor: DynamicValue<string>;
    action1Enabled: boolean;
    action1Caption: DynamicValue<string>;
    action1?: ActionValue;
    action2Enabled: boolean;
    action2Caption: DynamicValue<string>;
    action2?: ActionValue;
    action3Enabled: boolean;
    action3Caption: DynamicValue<string>;
    action3?: ActionValue;
}

export interface NativeSelectableTextPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    source: string;
    substringAttr: string;
    selectionStart: string;
    selectionEnd: string;
    textColor: string;
    action1Enabled: boolean;
    action1Caption: string;
    action1: {} | null;
    action2Enabled: boolean;
    action2Caption: string;
    action2: {} | null;
    action3Enabled: boolean;
    action3Caption: string;
    action3: {} | null;
}
