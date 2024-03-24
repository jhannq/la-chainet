import moment from 'moment';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { faker } from '@faker-js/faker';
import 'react-calendar/dist/Calendar.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import EventsTimeline from '../app-events-timeline';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------


export default function ResidentView() {

    /* eslint-disable no-unused-vars */

    const [value, onChange] = useState(new Date());
    const state = {
      'date': '04-03-2024'
    }

    const mark = [
      '08-05-2024',
      '03-03-2024',
      '05-03-2024'
  ]

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Days in Stay"
            total={12}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_day.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Days on Plan"
            total={9}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_planday.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Tasks Completed"
            total={6}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_task.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Goals Completed"
            total={4}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_goal.png" />}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={4}>
          <Calendar
            style={{ height: 500 }}
            onChange={onChange}
            value={value}
            // eslint-disable-next-line consistent-return
            tileClassName={({ date, view }) => {
                if(mark.find(x => x === moment(date).format("DD-MM-YYYY"))) {
                return  'highlight'
              }
            }}
              tileDisabled={({ date }) => date.getDay() === 0}
              minDate={
                new Date()
              }
            />
        </Grid>

        {/* <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={4}>
          <EventsTimeline
            title="Finding an Appartment / Affordable Housing"
            list={[...Array(2)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Find organizations to help acess affordable housing',
                'Find resources to access affordable housing',
              ][index],
              type: `order${index + 1}`,
              time: '',
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <EventsTimeline
            title="Greatly reduce alcohol consumption and quit Smoking"
            list={[...Array(2)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Leave alcohol in the office',
                'Become of aware or alcohol consuption and risk factors that lead to it',
              ][index],
              type: `order${index + 1}`,
              time: '',
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <EventsTimeline
            title="Payment of Tickets, Fines and Debts"
            list={[...Array(2)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Make arrangments with various authorities with debt',
                'Take steps to find info on the total prices',

              ][index],
              type: `order${index + 1}`,
              time: '',
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <EventsTimeline
            title="Start Hockey Training and Join Team"
            list={[...Array(3)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Approach sports organizations to obtain necessary equipment',
                'Obtain sources of funding if possible',
                'Conduct research related to sports activities',
              ][index],
              type: `order${index + 1}`,
              time: '',
            }))}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Goal Task Tracking"
            list={[
              { id: '1', name: 'Read a book on quitting cigarettes' },
              { id: '2', name: 'Register for house activities: dance, sports, yoga' },
              { id: '3', name: 'Sign up for legal clinic' },
              { id: '4', name: 'Make appointment with legal clinic' },
       
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
