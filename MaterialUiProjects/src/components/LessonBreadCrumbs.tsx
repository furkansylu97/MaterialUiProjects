import { Breadcrumbs, Link, Stack } from '@mui/material'

export const LessonBreadCrumbs = () => {
  return (
    <Stack>
        <Breadcrumbs >
            <Link href='/' underline='hover'>Homepage</Link>
            <Link href='/blog' underline='hover'>Blog</Link>
            <Link href='/profile'underline='none'>Profile</Link>
        </Breadcrumbs>
        <Breadcrumbs separator='>'>
            <Link href='/' underline='hover'>Homepage</Link>
            <Link href='/blog' underline='hover'>Blog</Link>
            <Link href='/profile'underline='none'>Profile</Link>
        </Breadcrumbs>
        <Breadcrumbs separator='-' maxItems={2}>
            <Link href='/' underline='hover'>Homepage</Link>
            <Link href='/blog' underline='hover'>Blog</Link>
            <Link href='/profile'underline='none'>Profile</Link>
            <Link href='/profile'underline='none'>Cart</Link>
            <Link href='/profile'underline='none'>Courses</Link>
        </Breadcrumbs>
    </Stack>
  )
}
