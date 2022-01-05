import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { cwAPI } from "./AxiosService.js";

class JobsService {
  async getAllJobs() {
    const res = await cwAPI.get("jobs");
    ProxyState.jobs = res.data.map((j) => new Job(j));
  }
}

export const jobsservice = new JobsService();
