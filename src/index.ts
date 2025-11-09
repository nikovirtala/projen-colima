import { Homebrew } from "@nikovirtala/projen-homebrew";
import type { IConstruct } from "constructs";
import type { Project } from "projen";
import { Component } from "projen/lib/component";

/**
 * Colima component for projen projects.
 *
 * Adds Colima support to your project with automatic installation and startup.
 */
export class Colima extends Component {
    constructor(scope: IConstruct) {
        super(scope);

        const project = this.project as Project;

        let homebrew = Homebrew.of(project);
        if (!homebrew) {
            homebrew = new Homebrew(project);
        }

        homebrew.addPackage("colima");
        homebrew.addPackage("docker");

        project.addTask("colima", {
            exec: "colima status >/dev/null 2>&1 || colima start",
        });
    }
}
