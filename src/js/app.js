// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log('sum: ',sum([1, 2]));

export default function healthLevel (name, health) {
    if (health > 50) {
        return 'healthy';
    }
    if (health >= 15) {
        return 'wounded';
    }
    return 'critical';
}
