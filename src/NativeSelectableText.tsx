import { ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, StyleSheet } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { NativeSelectableTextProps } from "../typings/NativeSelectableTextProps";
import Big from "big.js";
import { SelectableText } from "@astrocoders/react-native-selectable-text";
import { Option } from "mendix";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

const NativeSelectableText = ({
    source,
    substringAttr,
    selectionStart,
    selectionEnd,
    textColor,
    action1Enabled,
    action1Caption,
    action1,
    action2Enabled,
    action2Caption,
    action2,
    action3Enabled,
    action3Caption,
    action3
}: NativeSelectableTextProps<CustomStyle>): ReactNode => {

    if (source.value === undefined) {
        return null;
    }

    const onSelectionChange = (eventType: string, content: Option<string>, selectionStartPos: number, selectionEndPos: number) => {

        const start = new Big(selectionStartPos);
        const end = new Big(selectionEndPos);

        selectionStart.setValue(start);
        selectionEnd.setValue(end);

        substringAttr.setValue(content);

        if (action1Enabled && eventType === action1Caption.value) {
            action1?.execute();
        }
        if (action2Enabled && eventType === action2Caption.value) {
            action2?.execute();
        }
        if (action3Enabled && eventType === action3Caption.value) {
            action3?.execute();
        }

    }

    const getMenuItems = () => {
        let menuItems: any[] = [];
        if (action1Enabled) {
            menuItems.push(action1Caption.value);
        }
        if (action2Enabled) {
            menuItems.push(action2Caption.value);
        }
        if (action3Enabled) {
            menuItems.push(action3Caption.value);
        }
        return menuItems;
    }

    return (
        <SelectableText
            style={styles(textColor.value).text}
            menuItems={getMenuItems()}
            onSelection={({ eventType, content, selectionStart, selectionEnd }) => { onSelectionChange(eventType, content, selectionStart, selectionEnd) }}
            value={source.value}
        />
    )
}

const styles = (textColor: any) => StyleSheet.create({
    text: {
      color: textColor
    },
  });

NativeSelectableText.displayName = "NativeSelectableText";

export { NativeSelectableText };