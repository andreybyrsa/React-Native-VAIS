import TypographyVariants, { TypographyVariantsType } from "../assets/styles/typography/typography";


const getCurrentTypography = (TypographyName: TypographyVariantsType) => {
   return TypographyVariants[TypographyName]
}

export default getCurrentTypography