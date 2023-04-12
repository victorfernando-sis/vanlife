async function getVans() {
  try {
    const res = await fetch("/api/vans");
    const data = await res.json();
    return data.vans;
  } catch (error) {
    console.log("An error ocurred trying to retrive host vans.", error);
  }
}

async function getHostVans() {
  try {
    const res = await fetch("/api/host/vans");
    const data = await res.json();
    return data.vans;
  } catch (error) {
    console.log("An error ocurred trying to retrive host vans.", error);
  }
}

export { getVans, getHostVans };
