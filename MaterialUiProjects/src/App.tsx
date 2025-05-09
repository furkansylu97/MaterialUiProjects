import './App.css'
import { LessonCustomization } from './components/LessonCustomization'
// import { LessonTimeline } from './components/LessonTimeline'
// import { LessonMasonry } from './components/LessonMasonry'
// import { LessonTabs } from './components/LessonTabs'
// import { LessonDateRange } from './components/LessonDateRange'
// import { LessonDatePickerTimePicker } from './components/LessonDatePickerTimePicker'
// import { LessonTable } from './components/LessonTable'
// import { LessonLoadingButton } from './components/LessonLoadingButton'
// import { LessonSkeleton } from './components/LessonSkeleton'
// import { LessonSpinnerOrProgress } from './components/LessonSpinnerOrProgress'
// import { LessonSnackbar } from './components/LessonSnackbar'
// import { LessonDialog } from './components/LessonDialog'
// import { LessonAlert } from './components/LessonAlert'
// import { LessonToolTip } from './components/LessonToolTip'
// import { LessonList } from './components/LessonList'
// import { LessonAvatar } from './components/LessonAvatar'
// import { LessonBottomNavigation } from './components/LessonBottomNavigation'
// import { LessonSpeedDial } from './components/LessonSpeedDial'
// import { LessonBadge } from './components/LessonBadge'
// import { LessonDrawer } from './components/LessonDrawer'
// import { LessonBreadCrumbs } from './components/LessonBreadCrumbs'
// import { LessonLink } from './components/LessonLink'
// import { LessonPaper } from './components/LessonPaper'
// import { LessonImageList } from './components/LessonImageList'
// import { LessonAppBar } from './components/LessonAppBar'
// import { LessonAccordion } from './components/LessonAccordion'
// import { LessonCard } from './components/LessonCard'
// import { LessonGrid } from './components/LessonGrid'
// import { LessonStack } from './components/LessonStack'
// import { LessonBox } from './components/LessonBox'
// import { LessonAutoComplete } from './components/LessonAutoComplete'
// import { LessonCheckbox } from './components/LessonCheckbox'
// import { LessonSelect } from './components/LessonSelect'
// import { LessonRadioExample } from './components/LessonRadioExample'
// import { LessonRadioGroup } from './components/LessonRadioGroup'
// import { LessonTextField } from './components/LessonTextField'
// import { LessonButtonGroup } from './components/LessonButtonGroup'
// import { LessonButton } from './components/LessonButton'
// import { LessonTypography } from './components/LessonTypography'
import { createTheme, colors, ThemeProvider } from '@mui/material'

const Theme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500],
    }
  }
})

function App() {
  return (
    <>
    <ThemeProvider theme={Theme}>
        {/* <LessonTypography /> */}
        {/* <LessonButton /> */}
        {/* <LessonButtonGroup /> */}
        {/* <LessonTextField /> */}
        {/* <LessonRadioGroup /> */}
        {/* <LessonRadioExample /> */}
        {/* <LessonSelect /> */}
        {/* <LessonCheckbox /> */}
        {/* <LessonAutoComplete /> */}
        {/* <LessonBox /> */}
        {/* <LessonStack /> */}
        {/* <LessonGrid /> */}
        {/* <LessonCard /> */}
        {/* <LessonAccordion /> */}
        {/* <LessonAppBar /> */}
        {/* <LessonImageList /> */}
        {/* <LessonPaper /> */}
        {/* <LessonLink /> */}
        {/* <LessonBreadCrumbs /> */}
        {/* <LessonDrawer /> */}
        {/* <LessonBadge /> */}
        {/* <LessonSpeedDial /> */}
        {/* <LessonBottomNavigation /> */}
        {/* <LessonAvatar /> */}
        {/* <LessonList /> */}
        {/* <LessonToolTip /> */}
        {/* <LessonAlert /> */}
        {/* <LessonDialog /> */}
        {/* <LessonSnackbar /> */}
        {/* <LessonSpinnerOrProgress /> */}
        {/* <LessonSkeleton /> */}
        {/* <LessonLoadingButton /> */}
        {/* <LessonTable />
        <LessonDatePickerTimePicker /> */}
        {/* <LessonDateRange /> */}
        {/* <LessonTabs /> */}
        {/* <LessonMasonry /> */}
        {/* <LessonTimeline /> */}
      <LessonCustomization />
    </ThemeProvider>
    </>
  )
}

export default App
