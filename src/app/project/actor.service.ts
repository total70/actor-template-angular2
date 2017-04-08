import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { ActorTemplate } from './actor-template';
import { Actor } from './actor';

@Injectable()
export class ActorService {
  PATH: Array<any> = ["/projects", "/actor_templates"];
  constructor(public af: AngularFire) { }

  createActorTemplate(templateName: string, projectId: string, actorTemplate: ActorTemplate): firebase.Promise<void> {
    return this.af.database.list(this.PATH[0]+"/"+projectId+"/actor_templates").push(actorTemplate)
  }

  createActor(actor: Actor, projectId: string, templateName: string): firebase.Promise<void> {
    return this.af.database.list(this.PATH[0]+"/"+projectId+"/actor_templates/"+templateName+"/actors").push(actor);
  }
}
