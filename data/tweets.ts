const tweets = [
    {
        id: 't1',
        user: {
            id: 'u1',
            username: 'thefirstuser',
            name: 'John Doe',
            image: 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg'
        },
        createdAt: '2021-09-20T11:28:22.000Z',
        content: 'Paris looks fine this time of the year',
        image:'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        numberOfComments: 123,
        numberOfRetweets: 204,
        numberOfLikes: 132
    },
    {
        id: 't2',
        user: {
            id: 'u2',
            username: 'theseconduser',
            name: 'Jane Doe',
            image: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg'
        },
        createdAt: '2021-09-20T10:58:02.000Z',
        content: "Germany is really a nice place",
        image:'https://www.studying-in-germany.org/wp-content/uploads/2019/02/Best-universities-in-Germany-for-international-students.jpg',
        numberOfComments: 43,
        numberOfRetweets: 24,
        numberOfLikes: 1255
    },
    {
        id: 't3',
        user: {
            id: 'u3',
            username: 'thethirduser',
            name: 'James Cornor',
            image: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'
        },
        createdAt: '2021-09-20T08:28:22.000Z',
        content: 'Comic-Con',
        numberOfComments: 12,
        numberOfRetweets: 4,
        numberOfLikes: 459
    },
    {
        id: 't4',
        user: {
            id: 'u4',
            username: 'theforduser',
            name: 'Sarah Cornor',
            image: 'https://pyxis.nymag.com/v1/imgs/74b/2a3/6c8160504678c445e7d5da6679f4c22748-25-SarahConnor.jpg'
        },
        createdAt: '2021-09-20T08:48:22.000Z',
        content: 'Terminators are back!! Better watch out!',
        numberOfComments: 1212,
        numberOfRetweets: 422,
        numberOfLikes: 2597
    }
]

export default tweets;