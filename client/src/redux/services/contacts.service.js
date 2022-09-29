import axios from "axios";
import API_URLS from "../../utils/apiUrls";

// get contact list
export async function getContactList() {
  const url = `/${API_URLS.contacts}`;

  return await axios
    .request(url)
    .then((response) => {
      if (response.status === 200) {
        return {
          message: "Success",
          success: true,
          data: response.data,
        };
      } else {
        return {
          success: false,
          data: "",
          error: "",
        };
      }
    })
    .catch((err) => console.log(err));
}
