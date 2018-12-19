var app = new Vue({
    el: '#table',
    data: {
        students: [
            {
                email: "bianca@bianca.com",
                fname: "Bianca",
                lname: "Pereira",
                group: "important people",
                phone: "435-000-4321",
                hours: 1200
            },
            {
                email: "testtesting@google.com",
                fname: "Brenda",
                lname: "Correia",
                group: "important people",
                phone: "781-633-2497",
                hours: 1000
            },
            {
                email: "marcia_santos1234@gmail.com",
                fname: "Marcia",
                lname: "Santos",
                group: "normal people",
                phone: "781-296-2222",
                hours: 100
            },
            {
                email: "eneaslimasilva@yahoo.com",
                fname: "Eneas", lname: "Lima Silva",
                group: "important people",
                phone: "755-603-0000",
                hours: 600
            },
            {
                email: "jose.fernando@gmail.com",
                fname: "José Fernando",
                lname: "Nito",
                group: "normal people",
                phone: "555-987-1234",
                hours: 200
            },
        ],
        search: '',
        sort: 'asc',
    },
    computed: {
        filteredList() {
            let filteredStudents = this.students;

            // search by email or group
            if (this.search) {
                filteredStudents = this.students.filter(student => {
                    return student.email.toLowerCase().includes(this.search.toLowerCase()) ||
                        student.group.toLowerCase().includes(this.search.toLowerCase())
                })
            }

            // order by hours
            if (this.sort) {
                return _.orderBy(filteredStudents, 'hours', [this.sort])
            }
        }
    },
    methods: {
        // click handler for order by hours
        clickHandler: function() {
            this.sort = this.sort == 'desc' ? 'asc' : 'desc';
        },
    }
  })
