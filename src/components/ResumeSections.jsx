import { useState } from "react"
import ResumeGeneralSection from "./ResumeGeneralSection"
import ResumeEducationalSection from "./ResumeEducationalSection"
import ResumePracticalSection from "./ResumePracticalSection"
function ResumeSections({resume, bulletPoints}) {
    //instiution
    //degree
    //time frame (start & end)
    //location



    return <div class="vertical-dd">
        <ResumeGeneralSection resume={resume}></ResumeGeneralSection>
        <ResumeEducationalSection resume={resume}></ResumeEducationalSection>
        <ResumePracticalSection resume={resume} bulletPoints={bulletPoints}></ResumePracticalSection>
    </div>
}

export default ResumeSections