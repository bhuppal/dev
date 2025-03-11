// fastiest/easier way to access/unpack variables from arrays, objects

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const { first: FirstName, last: LastName, city: Place } = bob;
console.log(FirstName, LastName, Place);

const {
  siblings: { sister: sibling },
} = bob;
console.log(sibling);

