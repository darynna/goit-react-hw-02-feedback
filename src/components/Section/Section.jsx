import {SectionWrap, Title} from './Section.styled'

export const Section = ({title, children})=>{
    return <SectionWrap>
        <Title>{title}</Title>
        {children}
    </SectionWrap>
}