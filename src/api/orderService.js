import fetch from '@/plugins/axios'

/**
 * 所有api请求信息
 */
export const apiAllRecord = () => fetch('/statis/api/all');
