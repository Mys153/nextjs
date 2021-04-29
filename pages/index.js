import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Garlic',
    image:
      'http://ht.mu/wp-content/uploads/2020/04/garlic.jpg',
    address: 'FamilyMart',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'Tomato',
    image:
      'https://hipowershot.com/wp-content/uploads/2020/06/shutterstock_1020502231-scaled.jpg',
    address: 'FamilyMart',
    description: 'This is a second meetup!',
  },
  {
    id: 'm3',
    title: 'Basil',
    image:
      'https://cdn.shopify.com/s/files/1/0156/0137/products/Basil_plant_1280x960_0fc95446-605c-49e3-aa42-c6f3a171b8ae.jpg',
    address: 'FamilyMart',
    description: 'This is a second meetup!',
  },
  {
    id: 'm4',
    title: 'Pumpkin',
    image:
      'https://www.newhollandchips.com/wp-content/uploads/2020/05/pumpkin-health-benefits-nutrition-facts.jpg',
    address: 'BotaMarket',
    description: 'This is a second meetup!',
  },
  {
    id: 'm5',
    title: 'Lemon',
    image:
      'https://f.btwcdn.com/store-43065/product/8d230e2e-00fd-8350-5f52-600fe0bcf413.jpg',
    address: 'BotaMarket',
    description: 'This is a second meetup!',
  },
  {
    id: 'm6',
    title: 'Carrot',
    image:
      'https://cu.lnwfile.com/5w0cad.jpg',
    address: 'BotaMarket',
    description: 'This is a second meetup!',
  },
  {
    id: 'm7',
    title: 'Sweet Corn',
    image:
      'https://www.ocorganicshop.com/wp-content/uploads/2019/08/Sweet-corn-1.jpg',
    address: 'FamilyMart',
    description: 'This is a second meetup!',
  },
  {
    id: 'm8',
    title: 'Cucumber',
    image:
      'https://cdn.mos.cms.futurecdn.net/EBEXFvqez44hySrWqNs3CZ.jpg',
    address: 'FamilyMart',
    description: 'This is a second meetup!',
  },
  {
    id: 'm9',
    title: 'Onion',
    image:
      'https://i.pinimg.com/originals/e4/47/18/e44718d714028f7c82146467a36b5c4a.png',
    address: 'BotaMarket',
    description: 'This is a second meetup!',
  },
  {
    id: 'm10',
    title: 'Morning Glory',
    image:
      'https://backend.tops.co.th/media//catalog/product/0/0/0000030768116_x3.jpg',
    address: 'BotaMarket',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;
