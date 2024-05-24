import employeeIcon from "@ui5/webcomponents-icons/dist/employee.js";
import {
  Avatar,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  ShellBar,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { Exercise } from "./Exercise";

function App() {
  return (
    <>
      <ShellBar
        logo={
          <img
            src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
            alt={"UI5 Web Components for React logo"}
          />
        }
        primaryTitle="Simple React Exercise"
        profile={<Avatar icon={employeeIcon} />}
      />
      <FlexBox justifyContent={FlexBoxJustifyContent.Center}>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.Center}
          wrap={FlexBoxWrap.Wrap}
          direction={FlexBoxDirection.Column}
          style={spacing.sapUiContentPadding}
        >
          <Exercise />
        </FlexBox>
      </FlexBox>
    </>
  );
}

export default App;
