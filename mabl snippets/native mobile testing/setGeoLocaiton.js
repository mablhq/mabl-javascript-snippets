function mablJavaScriptStep(
  mablInputs,
  callback,
  altitude = "10",
  latitude = "48.85873;",
  longitude = "2.29373"
) {
  async function callAppium() {
    const driver = await mabl.mobile.getDriver();
    await driver.setGeoLocation({ latitude, longitude, altitude });
    return "Geo Location set: " + latitude + ", " + longitude + ", " + altitude;
  }
  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error));
}
