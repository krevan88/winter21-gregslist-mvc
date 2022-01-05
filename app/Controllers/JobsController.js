import { ProxyState } from "../AppState.js";
import { jobsservice } from "../Services/JobsService.js";

function _drawJobs() {
  const jobs = ProxyState.jobs;
  let template = "";
  jobs.forEach((j) => (template += j.Template));
  document.getElementById("listings").innerHTML = template;
}
export class JobsController {
  constructor() {
    jobsservice.getAllJobs();
  }

  drawJobs() {
    _drawJobs();
  }
}
