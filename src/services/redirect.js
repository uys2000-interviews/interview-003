export const landingRedirecter = function (isLogged, router) {
  if (!isLogged) router.push("login");
};
