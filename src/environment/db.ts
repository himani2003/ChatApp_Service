import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import {TextMessageEntity} from "../domain/entity/text-message-entity";
import {UserEntity} from "../domain/entity/user-entity";


export const dbDatasourceOptions: DataSourceOptions = {
    type: "postgres",
    url: "postgresql://flutter_chat_app_with_nodejs_user:WzTGs2rSLJoBkKl6wjnK38KdRsDmPTPS@dpg-ctchvqi3esus73bg81ng-a.oregon-postgres.render.com/flutter_chat_app_with_nodejs",
    synchronize: true,
    logging: false,
    ssl: true, // Enable SSL for secure connections
    entities: [TextMessageEntity, UserEntity],
    migrations: [],
    subscribers: [],
};
