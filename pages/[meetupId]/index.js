import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='http://ht.mu/wp-content/uploads/2020/04/garlic.jpg'
      title='Garlic'
      address='FamilyMart'
      description='Garlic from neighbor garden $2 for 100g'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
      {
        params: {
          meetupId: 'm4',
        },
      },
      {
        params: {
          meetupId: 'm5',
        },
      },
      {
        params: {
          meetupId: 'm6',
        },
      },
      {
        params: {
          meetupId: 'm7',
        },
      },
      {
        params: {
          meetupId: 'm8',
        },
      },
      {
        params: {
          meetupId: 'm9',
        },
      },
      {
        params: {
          meetupId: 'm10',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
