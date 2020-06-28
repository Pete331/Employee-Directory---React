import Faker from "faker";

export default function makeEmployees() {
  const users = [];
  for (let i = 0; i < 5; i++) {
    const user = {
      name: Faker.name.firstName() + " " + Faker.name.lastName(),
      email: Faker.internet.email(),
      avatar: Faker.internet.avatar(),
      country: Faker.address.country(),
      weeklyresult: Faker.commerce.price(),
    };
    users.push(user);
  }
  return users;
}
