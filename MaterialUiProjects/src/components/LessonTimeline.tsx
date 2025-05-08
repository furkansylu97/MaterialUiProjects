import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'


export const LessonTimeline = () => {
  return (
    <Timeline>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Hasan Varol İlköğretim Okulu</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Akmercan Anadolu Lisesi</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>İzmir Katip Çelebi Üniversitesi</TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}
