import { UserProfile } from "../models/UserProfile";
import users from "../../test-data/users/users.json";

export class UserDataProvider {

    static getUser(userName: string): UserProfile {

        const user = users[userName as keyof typeof users];

        if (!user) {
            throw new Error(
                `❌ User profile '${userName}' was not found in users.json`
            );
        }

        return user;
    }
}