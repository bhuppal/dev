const people = [
    {
        name: 'bob',
        location: { street: '123 main street',
            timeZone: { offset: '+7:00' },
        },
    },
    { name: 'peter', 
        location: { street: '123 Pine street' }
    },
    {
        name: 'susan',
        location: { street: '123 Apple street', 
            timeZone: { offset: '+9.00'
            },
        }
    }
]

people.forEach((person) => {
    console.log(person?.location?.timeZone?.offset);
})