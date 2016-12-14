module.exports = [
    {
        name   : "tasks",
        path   : "./data/coopsacr/tasks.csv",
        config : {
            extractKeys : {
                "TaskId"      : {name : "id",          default : 0},
                "Title"       : {name : "name",        default : "-"},
                "Description" : {name : "description", default : "-"},
                "MilestoneId" : {name : "id",          default : 0}
            }
        }
    }, {
        name   : "stories",
        path   : "./data/coopsacr/game_design_model.csv",
        config : {
            extractKeys : {
                "ParentDesignElementId" : {name : "parentId",    default : -1},
                "DesignElementId"       : {name : "id",          default : -1},
                "Name"                  : {name : "name",        default : "-"},
                "Description"           : {name : "description", default : "-"}
            }
        }
    }

]