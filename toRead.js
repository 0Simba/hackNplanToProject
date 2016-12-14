module.exports = [
    {
        name   : "tasks",
        path   : "./data/coopsacr/tasks.csv",
        config : {
            extractKeys : {
                "TaskId"          : {name : "id",          default : 0},
                "DesignElementId" : {name : "parentId",          default : 0},
                "Title"           : {name : "name",        default : "-"},
                "Description"     : {name : "description", default : "-"},
                "MilestoneId"     : {name : "sprintId",    default : -1}
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
    }, {
        name   : "sprint",
        path   : "./data/coopsacr/milestones.csv",
        config : {
            extractKeys : {
                "MilestoneId" : {name : "sprintId"},
                "Name"        : {name : "name"},
                "DueDate"     : {name : "endDate"}
            }
        }
    }

]