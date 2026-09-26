let i, j;
let n = 5;
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br>");

for (i = 1; i <= n; i++) {
  for (j = i; j <= n; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br>");

for (i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<br>");

for (i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++) {
    if (i == 1 || i == n || j == 1 || j == n) {
      document.write("*");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }
  document.write("<br>");
}

document.write("<br>");
k = 1;
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    document.write(k, " ");
    k++;
  }
  document.write("<br>");
}

document.write("<br>");

for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    document.write(i, " ");
  }
  document.write("<br>");
}

document.write("<br>");

for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    document.write(j, " ");
  }
  document.write("<br>");
}

document.write("<br>");

for (i = 1; i <= n; i++) {
  for (j = i; j < n; j++) {
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  for (j = 1; j <= i; j++) {
    document.write("👽");
  }
  document.write("<br>");
}
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  for (j = i; j < n; j++) {
    document.write("👽");
  }
  document.write("<br>");
}

for (i = 1; i <= n; i++) {
  for (j = i; j < n; j++) {
    document.write("&nbsp;");
  }
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    document.write("&nbsp;");
  }
  for (j = i; j < n; j++) {
    document.write("*");
  }
  document.write("<br>");
}

for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br>");
}
