import { Meteor } from 'meteor/meteor';

SEO = new FlowRouterSEO();
SEO.setDefaults({
  title: 'camserials.org',
  description: 'Find information about your Leica, Rolleiflex, Hasselblad and more camera equipment by serial number.',
  meta: {
    'property="og:type"': 'website',
    'property="og:site_name"': 'camserials.org',
    'name="twitter:card"': 'camserials helps you to find specific camera models from huge serial number pools',
    'name="twitter:site"': '@camserials'
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
