import { PrismaClient } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

const categories = ["Tailgating", "Outdoor", "House", "Inaugration", "Match"];

type Media = {
  link: string;
  thumbnail: string;
};

type Event = {
  title: string;
  description: string;
  price: number;
  location: { lat: number; lng: number; address: string };
  category: string[];
  eventTimestamp: string;
  medias: Media[];
};

type User = {
  email: string;
  username: string;
  password: string;
  events: Event[];
};

function generateRandomNumber(length: number) {
  const memo = [];
  return function generateNumber() {
    /**
     * !If memo memory exceed just return throw an error for max length exceed
     */
    if (memo.length === length) {
      throw Error("Memo size exceed.");
    }

    const randomNumber = Math.floor(Math.random() * length);
    if (memo.includes(randomNumber)) {
      return generateNumber();
    }
    memo.push(randomNumber);
    return randomNumber;
  };
}

const generateMedias = (count: number) => {
  const medias: Media[] = [];
  for (let i = 0; i < count; i++) {
    medias.push({
      link: "https://ik.imagekit.io/imashish/ep2/pexels-sebastian-ervi-1763075_QllOREqfx.jpg",
      thumbnail:
        "https://ik.imagekit.io/imashish/tr:n-media_library_thumbnail/ep2/pexels-sebastian-ervi-1763075_QllOREqfx.jpg",
    });
  }

  return medias;
};

const geneareEvents = (count: number) => {
  const events: Event[] = [];

  for (let i = 0; i < count; i++) {
    const generateRandomNum = generateRandomNumber(5);
    const category = new Array(2).fill(1).map((_) => categories[generateRandomNum()]);
    events.push({
      title: faker.lorem.slug(),
      description: faker.lorem.paragraphs(),
      price: parseFloat((Math.random() * 100).toFixed(2)),
      location: {
        lng: faker.address.longitude(),
        lat: faker.address.latitude(),
        address: faker.address.streetAddress(),
      },
      eventTimestamp: Math.round(Math.random() * 5) > 2 ? faker.date.future() : faker.date.past(),
      category,
      medias: generateMedias(3),
    });
  }

  return events;
};

const generateUsers = (count: number) => {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    const username = faker.name.firstName().toLowerCase();
    users.push({
      username,
      email: `${username}@yopmail.com`,
      password: "adminpass",
      events: geneareEvents(3),
    });
  }

  return users;
};

async function seed() {
  const users = generateUsers(10);

  await Promise.all(
    users.map(({
      username, email, password, events,
    }: User) => prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        username,
        email,
        password,
        events: {
          create: events.map(({
            title, description, price, eventTimestamp, category, location, medias,
          }: Event) => ({
            title,
            description,
            price,
            eventTimestamp,
            location,
            category,
            medias: {
              create: medias.map((media: Media) => ({
                ...media,
              })),
            },
          })),
        },
      },
    })),
  );
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default seed;
