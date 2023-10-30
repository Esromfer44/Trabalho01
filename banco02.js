db.createCollection("projects", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "startDate", "endDate", "tasks"],
        properties: {
          name: {
            bsonType: "string"
          },
          startDate: {
            bsonType: "string"
          },
          endDate: {
            bsonType: "string"
          },
          tasks: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["title", "description", "creationDate", "status", "user"],
              properties: {
                title: {
                  bsonType: "string"
                },
                description: {
                  bsonType: "string"
                },
                creationDate: {
                  bsonType: "string"
                },
                completionDate: {
                  bsonType: "string"
                },
                status: {
                  enum: ["To-Do", "In-Progress", "Done"]
                },
                user: {
                  bsonType: "object",
                  required: ["name", "email"],
                  properties: {
                    name: {
                      bsonType: "string"
                    },
                    email: {
                      bsonType: "string",
                      pattern: "^\\S+@\\S+\\.\\S+$"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  