
/*Перепишите, используя async/await вместо .then/catch.

В функции getGithubUser замените рекурсию на цикл, используя async/await.*/

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url)
   {
    const response = await fetch(url);
  
    if (response.status == 200) 
    {
      return response.json();
    } 
    else
     {
      throw new HttpError(response);
    }
  }
  
  
  async function getGithubUser()
{
    let name = prompt("Введите логин?", "EvtifeevaMA107b1");
  
    while (true) 
    {
      try 
      {
        let user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Полное имя: ${user.name}.`);
        return user;
      } 
      catch (err) 
      {
        if (err instanceof HttpError && err.response.status == 404) 
        {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
          
          name = prompt("Введите логин?", "EvtifeevaMA107b1");
        } else
         {
          throw err;
        }
      }
    }
  }
  
  getGithubUser();