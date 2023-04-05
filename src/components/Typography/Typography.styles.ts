import { StyleSheet } from "react-native";
import getCurrentTypography from "../../utils/getCurrenttypography";

const TypographyStyles = StyleSheet.create({
   'title-1': getCurrentTypography('title-1'),
   'title-2': getCurrentTypography('title-2'),
   'title-3': getCurrentTypography('title-3'),
   'title-4': getCurrentTypography('title-4'),
   'title-5': getCurrentTypography('title-5'),
   'title-6': getCurrentTypography('title-6'),
   'title-7': getCurrentTypography('title-7'),
   'text-1': getCurrentTypography('text-1'),
   'text-2': getCurrentTypography('text-2'),
   'text-3': getCurrentTypography('text-3'),
   'text-4': getCurrentTypography('text-4'),
   'text-5': getCurrentTypography('text-5'),
   'text-6': getCurrentTypography('text-6'),
})

export default TypographyStyles