import ProfileSchema from "../../database/model/profileSchema.js";
import Profile from "../../database/repository/profile.js";

async function displayRoute(data, res) {
  // Parse request data and create profile object
  const jsonData = JSON.parse(data.data);
  const profileObj = ProfileSchema.create(jsonData);

  try {
    // Attempt to fetch profile details
    const payload = await Profile.profile(profileObj);

    // Send response with payload
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (payload.msg === "Profile Not Found") {
      res.writeHead(404);
    } else {
      res.writeHead(200);
    }
    res.write(payloadStr);
    res.end("\n");
  } catch (err) {
    console.log("Display Route Error:" + err);
  }
}

export { displayRoute };
