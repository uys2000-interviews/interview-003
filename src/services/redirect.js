export const landingRedirecter = function (isLogged, router) {
  isLogged, router;
  //if (!isLogged) router.push("login");
  router.push({ name: "dash" });
};
