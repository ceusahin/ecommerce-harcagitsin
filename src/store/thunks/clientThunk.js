import { setRoles } from "../actions/clientAction";

export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
  console.log("Thunk: fetchRolesIfNeeded çağrıldı");

  const { roles } = getState().client;

  if (roles.length) {
    console.log("Roller zaten var, fetch yapılmadı.");
    return;
  }

  dispatch({ type: "client/FETCH_ROLES_START" });
  console.log("Roller API'den çekiliyor...");

  try {
    const res = await fetch(
      "https://workintech-fe-ecommerce.onrender.com/roles",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP Hatası! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Roller başarıyla geldi:", data);

    dispatch(setRoles(data));
    dispatch({ type: "client/FETCH_ROLES_SUCCESS" });
  } catch (err) {
    console.error("Roller çekilemedi:", err.message);
    dispatch({ type: "client/FETCH_ROLES_ERROR", payload: err.message });
  }
};
