var todos = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true
  },
  {
    userId: 2,
    id: 21,
    title: "suscipit repellat esse quibusdam voluptatem incidunt",
    completed: false
  },
  {
    userId: 2,
    id: 22,
    title: "distinctio vitae autem nihil ut molestias quo",
    completed: true
  },
  {
    userId: 2,
    id: 23,
    title: "et itaque necessitatibus maxime molestiae qui quas velit",
    completed: false
  },
  {
    userId: 2,
    id: 24,
    title: "adipisci non ad dicta qui amet quaerat doloribus ea",
    completed: false
  },
  {
    userId: 2,
    id: 25,
    title: "voluptas quo tenetur perspiciatis explicabo natus",
    completed: true
  },
  {
    userId: 2,
    id: 26,
    title: "aliquam aut quasi",
    completed: true
  },
  {
    userId: 2,
    id: 27,
    title: "veritatis pariatur delectus",
    completed: true
  },
  {
    userId: 2,
    id: 28,
    title: "nesciunt totam sit blanditiis sit",
    completed: false
  },
  {
    userId: 2,
    id: 29,
    title: "laborum aut in quam",
    completed: false
  },
  {
    userId: 2,
    id: 30,
    title: "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
    completed: true
  },
  {
    userId: 2,
    id: 31,
    title: "repudiandae totam in est sint facere fuga",
    completed: false
  },
  {
    userId: 2,
    id: 32,
    title: "earum doloribus ea doloremque quis",
    completed: false
  },
  {
    userId: 2,
    id: 33,
    title: "sint sit aut vero",
    completed: false
  },
  {
    userId: 2,
    id: 34,
    title: "porro aut necessitatibus eaque distinctio",
    completed: false
  },
  {
    userId: 2,
    id: 35,
    title: "repellendus veritatis molestias dicta incidunt",
    completed: true
  },
  {
    userId: 2,
    id: 36,
    title: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
    completed: true
  },
  {
    userId: 2,
    id: 37,
    title: "sunt cum tempora",
    completed: false
  },
  {
    userId: 2,
    id: 38,
    title: "totam quia non",
    completed: false
  },
  {
    userId: 2,
    id: 39,
    title: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
    completed: false
  },
  {
    userId: 2,
    id: 40,
    title: "totam atque quo nesciunt",
    completed: true
  },
  {
    userId: 3,
    id: 41,
    title: "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    completed: false
  },
  {
    userId: 3,
    id: 42,
    title: "rerum perferendis error quia ut eveniet",
    completed: false
  },
  {
    userId: 3,
    id: 43,
    title: "tempore ut sint quis recusandae",
    completed: true
  },
  {
    userId: 3,
    id: 44,
    title: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
    completed: true
  },
  {
    userId: 3,
    id: 45,
    title: "velit soluta adipisci molestias reiciendis harum",
    completed: false
  },
  {
    userId: 3,
    id: 46,
    title: "vel voluptatem repellat nihil placeat corporis",
    completed: false
  },
  {
    userId: 3,
    id: 47,
    title: "nam qui rerum fugiat accusamus",
    completed: false
  },
  {
    userId: 3,
    id: 48,
    title: "sit reprehenderit omnis quia",
    completed: false
  },
  {
    userId: 3,
    id: 49,
    title: "ut necessitatibus aut maiores debitis officia blanditiis velit et",
    completed: false
  },
  {
    userId: 3,
    id: 50,
    title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
    completed: true
  },
  {
    userId: 3,
    id: 51,
    title: "distinctio exercitationem ab doloribus",
    completed: false
  },
  {
    userId: 3,
    id: 52,
    title: "nesciunt dolorum quis recusandae ad pariatur ratione",
    completed: false
  },
  {
    userId: 3,
    id: 53,
    title: "qui labore est occaecati recusandae aliquid quam",
    completed: false
  },
  {
    userId: 3,
    id: 54,
    title: "quis et est ut voluptate quam dolor",
    completed: true
  },
  {
    userId: 3,
    id: 55,
    title: "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
    completed: true
  },
  {
    userId: 3,
    id: 56,
    title: "deleniti ea temporibus enim",
    completed: true
  },
  {
    userId: 3,
    id: 57,
    title: "pariatur et magnam ea doloribus similique voluptatem rerum quia",
    completed: false
  },
  {
    userId: 3,
    id: 58,
    title: "est dicta totam qui explicabo doloribus qui dignissimos",
    completed: false
  },
  {
    userId: 3,
    id: 59,
    title: "perspiciatis velit id laborum placeat iusto et aliquam odio",
    completed: false
  },
  {
    userId: 3,
    id: 60,
    title: "et sequi qui architecto ut adipisci",
    completed: true
  },
  {
    userId: 4,
    id: 61,
    title: "odit optio omnis qui sunt",
    completed: true
  },
  {
    userId: 4,
    id: 62,
    title: "et placeat et tempore aspernatur sint numquam",
    completed: false
  },
  {
    userId: 4,
    id: 63,
    title: "doloremque aut dolores quidem fuga qui nulla",
    completed: true
  },
  {
    userId: 4,
    id: 64,
    title: "voluptas consequatur qui ut quia magnam nemo esse",
    completed: false
  },
  {
    userId: 4,
    id: 65,
    title: "fugiat pariatur ratione ut asperiores necessitatibus magni",
    completed: false
  },
  {
    userId: 4,
    id: 66,
    title: "rerum eum molestias autem voluptatum sit optio",
    completed: false
  },
  {
    userId: 4,
    id: 67,
    title: "quia voluptatibus voluptatem quos similique maiores repellat",
    completed: false
  },
  {
    userId: 4,
    id: 68,
    title: "aut id perspiciatis voluptatem iusto",
    completed: false
  },
  {
    userId: 4,
    id: 69,
    title: "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
    completed: false
  },
  {
    userId: 4,
    id: 70,
    title: "ut sequi accusantium et mollitia delectus sunt",
    completed: false
  },
  {
    userId: 4,
    id: 71,
    title: "aut velit saepe ullam",
    completed: false
  },
  {
    userId: 4,
    id: 72,
    title: "praesentium facilis facere quis harum voluptatibus voluptatem eum",
    completed: false
  },
  {
    userId: 4,
    id: 73,
    title: "sint amet quia totam corporis qui exercitationem commodi",
    completed: true
  },
  {
    userId: 4,
    id: 74,
    title: "expedita tempore nobis eveniet laborum maiores",
    completed: false
  },
  {
    userId: 4,
    id: 75,
    title: "occaecati adipisci est possimus totam",
    completed: false
  },
  {
    userId: 4,
    id: 76,
    title: "sequi dolorem sed",
    completed: true
  },
  {
    userId: 4,
    id: 77,
    title: "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
    completed: false
  },
  {
    userId: 4,
    id: 78,
    title: "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
    completed: false
  },
  {
    userId: 4,
    id: 79,
    title: "eum ipsa maxime ut",
    completed: true
  },
  {
    userId: 4,
    id: 80,
    title: "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
    completed: true
  },
  {
    userId: 5,
    id: 81,
    title: "suscipit qui totam",
    completed: true
  },
  {
    userId: 5,
    id: 82,
    title: "voluptates eum voluptas et dicta",
    completed: false
  },
  {
    userId: 5,
    id: 83,
    title: "quidem at rerum quis ex aut sit quam",
    completed: true
  },
  {
    userId: 5,
    id: 84,
    title: "sunt veritatis ut voluptate",
    completed: false
  },
  {
    userId: 5,
    id: 85,
    title: "et quia ad iste a",
    completed: true
  },
  {
    userId: 5,
    id: 86,
    title: "incidunt ut saepe autem",
    completed: true
  },
  {
    userId: 5,
    id: 89,
    title: "sequi ut omnis et",
    completed: true
  },
  {
    userId: 5,
    id: 92,
    title: "in omnis laboriosam",
    completed: true
  },
  {
    userId: 5,
    id: 93,
    title: "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
    completed: true
  },
  {
    userId: 5,
    id: 95,
    title: "vel nihil et molestiae iusto assumenda nemo quo ut",
    completed: true
  },
  {
    userId: 5,
    id: 96,
    title: "nobis suscipit ducimus enim asperiores voluptas",
    completed: false
  },
  {
    userId: 5,
    id: 98,
    title: "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
    completed: true
  },
  {
    userId: 6,
    id: 102,
    title: "sed ab consequatur",
    completed: false
  },
  {
    userId: 6,
    id: 103,
    title: "non sunt delectus illo nulla tenetur enim omnis",
    completed: false
  },
  {
    userId: 6,
    id: 104,
    title: "excepturi non laudantium quo",
    completed: false
  },
  {
    userId: 6,
    id: 105,
    title: "totam quia dolorem et illum repellat voluptas optio",
    completed: true
  }]

var stat=todos.filter(user=>user["completed"] == true).map(obj=>[obj.userId,obj.id])
console.log(stat);
var use=todos.filter(user=>user["userId"]==1&& user["completed"] == true)
console.log(use);


