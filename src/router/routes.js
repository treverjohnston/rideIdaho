
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'about',
        component: () => import('pages/About.vue')
      },
      {
        path: 'register',
        component: () => import('pages/Register.vue')
      },
      {
        path: 'routes',
        component: () => import('pages/Route.vue'),
        children: [
          {
            path: '9-mile', component: () => import('pages/Nine.vue')
          },

          {
            path: '19-Mile', component: () => import('pages/Eighteen.vue')
          },
          {
            path: '34-Mile', component: () => import('pages/Thirty.vue')
          },
          {
            path: 'Metric', component: () => import('pages/Metric.vue')
          },
          {
            path: 'Century', component: () => import('pages/Century.vue')
          }
        ]
      },
      {
        path: '9-mile', component: () => import('pages/Nine.vue')
      },

      {
        path: '19-Mile', component: () => import('pages/Eighteen.vue')
      },
      {
        path: '34-Mile', component: () => import('pages/Thirty.vue')
      },
      {
        path: 'Metric', component: () => import('pages/Metric.vue')
      },
      {
        path: 'Century', component: () => import('pages/Century.vue')
      },
      {
        path: 'fundraising',
        component: () => import('pages/Fundraising.vue')
      },
      {
        path: 'donate',
        component: () => import('pages/Donate.vue')
      },
      {
        path: 'raffle',
        component: () => import('pages/Raffle.vue')
      },
      {
        path: 'involved',
        component: () => import('pages/Involved.vue')
      },
      {
        path: 'gallery',
        component: () => import('pages/Gallery.vue')
      },
      {
        path: '2018-gallery',
        component: () => import('pages/2018-gallery.vue')
      },
      {
        path: 'merchandise',
        component: () => import('pages/Merch.vue')
      },
      // {
      //   path: 'volunteers',
      //  component: () => import('Volunteers')
      // },
      {
        path: 'sponsors',
        component: () => import('pages/Sponsors.vue')
      },
      {
        path: 'contact',
        component: () => import('pages/Contact.vue')
      },
      {
        path: 'ride',
        component: () => import('pages/Ride.vue')
      },
      {
        path: 'rules',
        component: () => import('pages/Rules.vue')
      },
      {
        path: 'climbs',
        component: () => import('pages/Climbs.vue')
      },
      {
        path: 'packet',
        component: () => import('pages/Packet.vue')
      },
      // {
      //   path: 'team',
      //   component: () => import('pages/Team.vue')
      // },
      {
        path: 'charities',
        component: () => import('pages/Charities.vue')
      },
      // {
      //   path: 'participants',
      //   component: () => import('pages/Participants.vue')
      // }
    ]

  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
