import { getRabbitMqChannel } from './utils/rabbitmq';
import { ancestorWhere } from 'tslint';
import {
  NetflowReportRequestTask,
  QUEUES,
  REPORT_TYPE,
  SyslogReportRequestTask,
} from './typings';
import { addEnrichmentTasks } from './worker/scheduler';
import momentTz from 'moment-timezone';

export const testRunner = async () => {
  const channel = await getRabbitMqChannel();
  const LOG_WORKER_QUEUE = QUEUES.LOG_WORKER_QUEUE;

  const from = new Date('2019-03-25T00:00:00').getTime();
  const to = new Date('2019-03-28T23:59:59').getTime();

  const message: SyslogReportRequestTask = {
    reportRequestId: '123123123123',
    businessId: '3724627346278346',
    reportType: REPORT_TYPE.SYSLOG,
    url: '*.css',
    domain: 'www*',
  };
  console.log('add test task', message);
  await channel.sendToQueue(
    LOG_WORKER_QUEUE,
    Buffer.from(JSON.stringify(message)),
  );
  await channel.close();
  // await channel.close();
  //await addEnrichmentTasks(from, to, 'syslog' as REPORT_TYPE.SYSLOG);
  //await addEnrichmentTasks(from, to, 'netflow' as REPORT_TYPE.NETFLOW);
};
