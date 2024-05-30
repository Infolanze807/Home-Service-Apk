import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clwg3ztjt02sw07w5ipm7iyx8/master";

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createBooking = async (data) => {
  const mutationQuery = gql`
    mutation createBooking {
      createBooking(
        data: {
          bookingStatus: Booked,
          businessList: { connect: { id: "`+data.businessid+`" } },
          date: "`+data.date+`",
          time: "`+data.time+`",
          userEmail: "`+data.userEmail+`",
          userName: "`+data.userName+`",
        }
      ) {
        id
      }
      publishManyBookings
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export default { getSlider, createBooking };
