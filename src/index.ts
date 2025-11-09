import { Homebrew } from "@nikovirtala/projen-homebrew";
import { Component } from "projen/lib/component";
import type { NodeProject } from "projen/lib/javascript";

/**
 * Colima component for projen projects.
 *
 * Adds Colima support to your project with automatic installation and startup.
 */
export class Colima extends Component {
    constructor(project: NodeProject) {
        super(project);

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
