# damson-server-core

## Information

<table>
<tr> 
<td>Package</td><td>damson-util</td>
</tr>
<tr>
<td>Description</td>
<td>Damson server core</td>
</tr>
</table>

## pushTask(client, task)

```javascript
var damsonServer = new DamsonServer();
damsonServer.pushTask('home-pc', {
  task_name: 'send-message',
  options: {
    message: 'Hello!'
  },
  driver_name: 'cli'
});
```

## popTask(client)

```javascript
var damsonServer = new DamsonServer();
var task = damsonServer.popTask('home-pc');
```