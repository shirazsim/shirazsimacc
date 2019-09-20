import { RequestHandler } from 'express';
import logger from '../utils/logger';
import { LOGGER_TIME_ZONE, NetflowReportRequestTask } from '../typings';
import netflow from '../modules/netflow';

const log = logger.createLogger();
import momentTz = require('moment-timezone');
/*
import render from '../reportEngine';
import {getReportConfig} from '../reportEngine/reportTypes';
import {sendReport} from '../modules/sendReport';
import * as fs from 'fs';
import {file as tmpFile} from 'tmp-promise';
*/

const controller: { [key: string]: RequestHandler } = {
  health: (request, response) => {
    response.send({ ok: true });
  },
  searchNetflow: async (request, response) => {
    const {
      type,
      departments,
      from,
      to,
      businessId,
      username,
      srcAddress,
      srcPort,
      dstAddress,
      dstPort,
      limit,
      skip,
    }: {
      type: string;
      departments: string[];
      from: number;
      to: number;
      businessId: string;
      username: string;
      srcAddress: string;
      srcPort: string;
      dstAddress: string;
      dstPort: string;
      limit: number;
      skip: number;
    } = request.body;

    log.debug(request.body);

    const netflowReportRequestTask: NetflowReportRequestTask = {
      type,
      fromDate: momentTz.tz(from, LOGGER_TIME_ZONE),
      toDate: momentTz.tz(to, LOGGER_TIME_ZONE),
      departments,
      username,
      businessId,
      srcAddress,
      dstAddress,
      srcPort,
      dstPort,
      limit,
      skip,
    };

    log.debug(
      `Create netflow report from ${netflowReportRequestTask.fromDate} to ${
        netflowReportRequestTask.toDate
      }`,
      JSON.stringify(netflowReportRequestTask),
    );

    try {
      const result = await netflow.queryNetflow(netflowReportRequestTask);
      if (type === 'json') {
        result.data = netflow.formatJson(result.data);
        return response.send(result);
      } else {
        return response.send({ file: 'file' });
      }
      //const reportConfig = getReportConfig(REPORT_TYPE.NETFLOW);
      /*const report = await render(reportConfig, {data});
                                    const reportFile = await tmpFile();
                                    await report.stream.pipe(fs.createWriteStream(reportFile.path));
                                    await sendReport(netflowReportRequestTask, reportFile.path, reportConfig);
                                    fs.unlink(reportFile.path, () => {
                                      log.debug('file cleared up');
                                    });
                                    log.debug(report.content);
                                    log.debug(`report created and uploaded`);
                                    response.send({ok: true});*/
    } catch (error) {
      log.error(error);
      throw error;
    }
  },
  /* createReport: async (request, response) => {
            const generalReportRequestTask: GeneralReportRequestTask = request.body;
            log.debug(request.body);
            if (!generalReportRequestTask.to) {
                generalReportRequestTask.toDate = momentTz.tz(LOGGER_TIME_ZONE);
                generalReportRequestTask.to = momentTz(
                    generalReportRequestTask.toDate,
                    LOCAL_TIME_ZONE,
                ).valueOf();
            } else {
                generalReportRequestTask.toDate = momentTz.tz(
                    generalReportRequestTask.to,
                    LOGGER_TIME_ZONE,
                );
            }

            // create fromDate 1 year before from Date
            if (!generalReportRequestTask.from) {
                generalReportRequestTask.fromDate = momentTz.tz(
                    generalReportRequestTask.toDate.valueOf() - 31539999 * 1000,
                    LOGGER_TIME_ZONE,
                );
                generalReportRequestTask.from = momentTz(
                    generalReportRequestTask.fromDate,
                    LOCAL_TIME_ZONE,
                ).valueOf();
            } else {
                generalReportRequestTask.fromDate = momentTz.tz(
                    generalReportRequestTask.from,
                    LOGGER_TIME_ZONE,
                );
            }
            log.debug(
                `Create ${generalReportRequestTask.type} report from ${
                    generalReportRequestTask.fromDate
                    } to ${generalReportRequestTask.toDate}`,
                JSON.stringify(generalReportRequestTask),
            );

            try {
                let data: any[];

                if (generalReportRequestTask.type === REPORT_TYPE.NETFLOW) {
                    data = await netflow.queryNetflow(
                        generalReportRequestTask as NetflowReportRequestTask,
                    );
                } else if (generalReportRequestTask.type === REPORT_TYPE.WEBPROXY) {
                    data = await webproxyLog.queryWebproxyLog(
                        generalReportRequestTask as WebproxyReportRequestTask,
                    );
                } else if (generalReportRequestTask.type === REPORT_TYPE.DNS) {
                    throw new Error('not implemented');
                } else {
                    throw new Error('invalid report type');
                }
                const reportConfig = getReportConfig(generalReportRequestTask.type);

                const report = await render(reportConfig, {data});
                const reportFile = await tmpFile();
                await report.stream.pipe(fs.createWriteStream(reportFile.path));
                await sendReport(generalReportRequestTask, reportFile.path, reportConfig);
                // fs.unlink(reportFile.path, () => {
                //   log.debug('file cleared up');
                // });
                //log.debug(report.content);
                log.debug(`report created and uploaded`);
                response.send({ok: true});
            } catch (error) {
                log.error(error);
                throw error;
            }
        },*/
};

export default controller;
