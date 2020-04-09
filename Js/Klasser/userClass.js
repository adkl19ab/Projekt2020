
export class User {
    constructor(name, password, email, online) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.online = online;
    }
}

export class Client extends User {
    constructor(name, password, email, online) {
        super(name, password, email, online);

    }
}

export class Consultant extends User {
    constructor(name, password, email, online, skillTag) {
        super(name, password, email, online);
        this.skillTag = skillTag;
    }
}