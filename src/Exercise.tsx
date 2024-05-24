import {
  Select,
  Option,
  FlexBox,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react";
import { Text } from "@ui5/webcomponents-react";
import { colors } from "./Colors";
import { useState } from "react";

export function Exercise() {
  const [selectedColor, setSelectedColor] = useState("");

  function handleSelection(e: { target: { value: string } }) {
    if (e.target.value === "Green") {
      setSelectedColor("green");
    } else if (e.target.value === "Yellow") {
      setSelectedColor("yellow");
    } else {
      setSelectedColor("red");
    }
  }

  return (
    <>
      <Select onChange={handleSelection}>
        {colors.map((color, i) => (
          <Option key={"color" + i}>{color.name}</Option>
        ))}
      </Select>

      <FlexBox justifyContent={FlexBoxJustifyContent.Center}>
        <Text style={{ color: selectedColor }}>signal</Text>
      </FlexBox>
    </>
  );
}
