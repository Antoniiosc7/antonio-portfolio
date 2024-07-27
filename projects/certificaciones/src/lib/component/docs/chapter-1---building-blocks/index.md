# {{ NgDocPage.title }}


## Welcome to Your Java 17 Certification Journey

Welcome to the beginning of your journey to achieve a Java 17 certification. We assume this isn’t the first Java programming book you’ve read. Although we do talk about the basics, we do so only because we want to make sure you have all the terminology and detail you need for the exam. If you’ve never written a Java program before, we recommend you pick up an introductory book on Java 8 or higher. Examples include *Head First Java, 3rd Edition* (O’Reilly Media, 2022) and *Beginning Programming with Java for Dummies* (For Dummies, 2021). Then come back to this certification study guide.

As the old saying goes, you have to learn how to walk before you can run. Likewise, you have to learn the basics of Java before you can build complex programs. In this chapter, we present the basics of Java packages, classes, variables, and data types, along with the aspects of each that you need to know for the exam. For example, you might use Java every day but be unaware that you cannot create a variable called `3dMap` or `this`. The exam expects you to know and understand the rules behind these principles. While most of this chapter should be review, there may be aspects of the Java language that are new to you since they don’t come up in practical use often.

## Learning about the Environment

The Java environment consists of understanding a number of technologies. In the following sections, we go over the key terms and acronyms you need to know and then discuss what software you need to study for the exam.

### Major Components of Java

The Java Development Kit (JDK) contains the minimum software you need to do Java development. Key commands include:

- **javac**: Converts `.java` source files into `.class` bytecode
- **java**: Executes the program
- **jar**: Packages files together
- **javadoc**: Generates documentation

The `javac` program generates instructions in a special format called bytecode that the `java` command can run. Then `java` launches the Java Virtual Machine (JVM) before running the code. The JVM knows how to run bytecode on the actual machine it is on. You can think of the JVM as a special magic box on your machine that knows how to run your `.class` file within your particular operating system and hardware.

#### Where Did the JRE Go?

In Java 8 and earlier, you could download a Java Runtime Environment (JRE) instead of the full JDK. The JRE was a subset of the JDK that was used for running a program but could not compile one. Now, people can use the full JDK when running a Java program. Alternatively, developers can supply an executable that contains the required pieces that would have been in the JRE.

When writing a program, there are common pieces of functionality and algorithms that developers need. Luckily, we do not have to write each of these ourselves. Java comes with a large suite of application programming interfaces (APIs) that you can use. For example, there is a `StringBuilder` class to create a large `String` and a method in `Collections` to sort a list. When writing a program, it is helpful to determine what pieces of your assignment can be accomplished by existing APIs.

You might have noticed that we said the JDK contains the minimum software you need. Many developers use an integrated development environment (IDE) to make writing and running code easier. While we do not recommend using one while studying for the exam, it is still good to know that they exist. Common Java IDEs include Eclipse, IntelliJ IDEA, and Visual Studio Code.

### Downloading a JDK

Every six months, Oracle releases a new version of Java. Java 17 came out in September 2021. This means that Java 17 will not be the latest version when you download the JDK to study for the exam. However, you should still use Java 17 to study with since this is a Java 17 exam. The rules and behavior can change with later versions of Java. You wouldn’t want to get a question wrong because you studied with a different version of Java!

You can download Oracle’s JDK on the Oracle website, using the same account you use to register for the exam. There are many JDKs available, the most popular of which, besides Oracle’s JDK, is OpenJDK.

Many versions of Java include preview features that are off by default but that you can enable. Preview features are not on the exam. To avoid confusion about when a feature was added to the language, we will say “was officially introduced in” to denote when it was moved out of preview.

### Check Your Version of Java

Before we go any further, please take this opportunity to ensure that you have the right version of Java on your path.

```bash
javac -version
java -version
```

Both of these commands should include version number 17.

## Understanding the Class Structure

In Java programs, classes are the basic building blocks. When defining a class, you describe all the parts and characteristics of one of those building blocks. In later chapters, you see other building blocks such as interfaces, records, and enums.

To use most classes, you have to create objects. An object is a runtime instance of a class in memory. An object is often referred to as an instance since it represents a single representation of the class. All the various objects of all the different classes represent the state of your program. A reference is a variable that points to an object.

In the following sections, we look at fields, methods, and comments. We also explore the relationship between classes and files.

### Fields and Methods

Java classes have two primary elements: methods, often called functions or procedures in other languages, and fields, more generally known as variables. Together these are called the members of the class. Variables hold the state of the program, and methods operate on that state. If the change is important to remember, a variable stores that change. That’s all classes really do. It’s the programmer’s job to create and arrange these elements in such a way that the resulting code is useful and, ideally, easy for other programmers to understand.

The simplest Java class you can write looks like this:

```java
public class Animal {
}
```

Java calls a word with special meaning a keyword, which we’ve marked bold in the previous snippet. Throughout the book, we often bold parts of code snippets to call attention to them. Line 1 includes the `public` keyword, which allows other classes to use it. The `class` keyword indicates you’re defining a class. `Animal` gives the name of the class. Granted, this isn’t an interesting class, so let’s add your first field.

```java
public class Animal {
  String name;
}
```

On line 2, we define a variable named `name`. We also declare the type of that variable to be `String`. A `String` is a value that we can put text into, such as "this is a string". `String` is also a class supplied with Java. Next we can add methods.

```java
public class Animal {
  String name;
  public String getName() {
    return name;
  }
  public void setName(String newName) {
    name = newName;
  }
}
```

On lines 3–5, we define a method. A method is an operation that can be called. Again, `public` is used to signify that this method may be called from other classes. Next comes the return type—in this case, the method returns a `String`. On lines 6–8 is another method. This one has a special return type called `void`. The `void` keyword means that no value at all is returned. This method requires that information be supplied to it from the calling method; this information is called a parameter. The `setName()` method has one parameter named `newName`, and it is of type `String`. This means the caller should pass in one `String` parameter and expect nothing to be returned.

The method name and parameter types are called the method signature. In this example, can you identify the method name and parameters?

```java
public int numberVisitors(int month) {
  return 10;
}
```

The method name is `numberVisitors`. There’s one parameter named `month`, which is of type `int`, which is a numeric type. Therefore, the method signature is `numberVisitors(int)`.

### Comments

Another common part of the code is called a comment. Because comments aren’t executable code, you can place them in many places. Comments can make your code easier to read. While the exam creators are trying to make the code harder to read, they still use comments to call attention to line numbers. We hope you use comments in your own code. There are three types of comments in Java. The first is called a single-line comment:

```java
// comment until end of line
```

A single-line comment begins with two slashes. The compiler ignores anything you type after that on the same line. Next comes the multiple-line comment:

```java
/* Multiple
 * line comment
 */
```

A multiple-line comment (also known as a multiline comment) includes anything starting from the symbol `/*` until the symbol `*/`. People often type an asterisk (*) at the beginning of each line of a multiline comment to make it easier to read, but you don’t have to. Finally, we have a Javadoc comment:

```java
/**
 * Javadoc multiple-line comment
 * @author Jeanne and Scott
 */
```

This comment is similar to a multiline comment, except it starts with `/**`. This special syntax tells the Javadoc tool to pay attention to the comment. Javadoc comments have a specific structure that the Javadoc tool knows how to read. You probably won’t see a Javadoc comment on the exam. Just remember it exists so you can read up on it online when you start writing programs for others to use.

As a bit of practice, can you identify which type of comment each of the following six words is in? Is it a single-line or a multiline comment?

```java
/*
 * // anteater
 */
// bear
// // cat
// /* dog */
/* elephant */
/*
 * /* ferret */
```

Did you look closely? Some of these are tricky. Even though comments technically aren’t on the exam, it is good to practice looking at code carefully.

### Classes and Source Files

Most of the time, each Java class is defined in its own `.java` file. In this chapter, the only top-level type is a class. A top-level type is a data structure that can be defined independently within a source file. For the majority of the book, we work with classes as the top-level type, but in Chapter 7, “Beyond Classes,” we present other top-level types, as well as nested types.

A top-level class is often public, which means any code can call it. Interestingly, Java does not require that the type be public. For example, this class is just fine:

```java
class Animal {
  String name;
}
```

You can even put two types in the same file. When you do so, at most one of the top-level types in the file is allowed to be public. That means a file containing the following is also fine:

```java
public class Animal {
  private String name;
}
class Animal2 {}
```

If you do have a public type, it needs to match the filename. The declaration `public class Animal2` would not compile in a file named `Animal.java`. In Chapter 5, “Methods,” we discuss what access options are available other than public.

Noticing a pattern yet? This chapter includes numerous references to topics that we go into in more detail in later chapters. If you’re an experienced Java developer, you’ll notice we keep a lot of the examples and rules simple in this chapter. Don’t worry; we have the rest of the book to present more rules and complicated edge cases!
```
```markdown
### Writing a main() Method

A Java program begins execution with its main() method. In this section, you learn how to create one, pass a parameter, and run a program. The main() method is often called an entry point into the program, because it is the starting point that the JVM looks for when it begins running a new program.

#### Creating a main() Method

The main() method lets the JVM call our code. The simplest possible class with a main() method looks like this:

```java
public class Zoo {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

This code prints Hello World. To compile and execute this code, type it into a file called `Zoo.java` and execute the following:

```
javac Zoo.java
java Zoo
```

If it prints Hello World, you were successful. If you do get error messages, check that you’ve installed the Java 17 JDK, that you have added it to the PATH, and that you didn’t make any typos in the example. If you have any of these problems and don’t know what to do, post a question with the error message you received in the Beginning Java forum at CodeRanch: www.coderanch.com/forums/f-33/java

To compile Java code with the `javac` command, the file must have the extension `.java`. The name of the file must match the name of the public class. The result is a file of bytecode with the same name but with a `.class` filename extension. Remember that bytecode consists of instructions that the JVM knows how to execute. Notice that we must omit the `.class` extension to run `Zoo.class`.

The rules for what a Java file contains, and in what order, are more detailed than what we have explained so far (there is more on this topic later in the chapter). To keep things simple for now, we follow this subset of the rules:
- Each file can contain only one public class.
- The filename must match the class name, including case, and have a `.java` extension.
- If the Java class is an entry point for the program, it must contain a valid main() method.

Let’s first review the words in the main() method’s signature, one at a time. The keyword `public` is what’s called an access modifier. It declares this method’s level of exposure to potential callers in the program. Naturally, public means full access from anywhere in the program. You learn more about access modifiers in Chapter 5.

The keyword `static` binds a method to its class so it can be called by just the class name, as in, for example, `Zoo.main()`. Java doesn’t need to create an object to call the main() method—which is good since you haven’t learned about creating objects yet! In fact, the JVM does this, more or less, when loading the class name given to it. If a main() method doesn’t have the right keywords, you’ll get an error trying to run it. You see static again in Chapter 6, “Class Design.”

The keyword `void` represents the return type. A method that returns no data returns control to the caller silently. In general, it’s good practice to use void for methods that change an object’s state. In that sense, the main() method changes the program state from started to finished. We explore return types in Chapter 5 as well. (Are you excited for Chapter 5 yet?)

Finally, we arrive at the main() method’s parameter list, represented as an array of `java.lang.String` objects. You can use any valid variable name along with any of these three formats:
- `String[] args`
- `String options[]`
- `String... friends`

The compiler accepts any of these. The variable name `args` is common because it hints that this list contains values that were read in (arguments) when the JVM started. The characters `[]` are brackets and represent an array. An array is a fixed-size list of items that are all of the same type. The characters `...` are called varargs (variable argument lists). You learn about `String` in this chapter. Arrays are in Chapter 4, “Core APIs,” and varargs are in Chapter 5.

#### Optional Modifiers in main() Methods

While most modifiers, such as `public` and `static`, are required for main() methods, there are some optional modifiers allowed.

```java
public final static void main(final String[] args) {}
```

In this example, both final modifiers are optional, and the main() method is a valid entry point with or without them. We cover the meaning of final methods and parameters in Chapter 6.

#### Passing Parameters to a Java Program

Let’s see how to send data to our program’s main() method. First, we modify the Zoo program to print out the first two arguments passed in:

```java
public class Zoo {
  public static void main(String[] args) {
    System.out.println(args[0]);
    System.out.println(args[1]);
  }
}
```

The code `args[0]` accesses the first element of the array. That’s right: array indexes begin with 0 in Java. To run it, type this:

```
javac Zoo.java
java Zoo Bronx Zoo
```

The output is what you might expect:

```
Bronx
Zoo
```

The program correctly identifies the first two “words” as the arguments. Spaces are used to separate the arguments. If you want spaces inside an argument, you need to use quotes as in this example:

```
javac Zoo.java
java Zoo "San Diego" Zoo
```

Now we have a space in the output:

```
San Diego
Zoo
```

Finally, what happens if you don’t pass in enough arguments?

```
javac Zoo.java
java Zoo Zoo
```

Reading `args[0]` goes fine, and Zoo is printed out. Then Java panics. There’s no second argument! What to do? Java prints out an exception telling you it has no idea what to do with this argument at position 1. (You learn about exceptions in Chapter 11, “Exceptions and Localization.”)

```
Zoo
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 1 out of bounds for length 1
 at Zoo.main(Zoo.java:4)
```

To review, the JDK contains a compiler. Java class files run on the JVM and therefore run on any machine with Java rather than just the machine or operating system they happened to have been compiled on.

### Understanding Package Declarations and Imports

#### Single-File Source-Code Programs

If you get tired of typing both `javac` and `java` every time you want to try a code example, there’s a shortcut. You can instead run

```
java Zoo.java Bronx Zoo
```

There is a key difference here. When compiling first, you omitted the `.java` extension when running `java`. When skipping the explicit compilation step, you include this extension. This feature is called launching single-file source-code programs and is useful for testing or for small programs. The name cleverly tells you that it is designed for when your program is one file.

#### Understanding Package Declarations and Imports

Java comes with thousands of built-in classes, and there are countless more from developers like you. With all those classes, Java needs a way to organize them. It handles this in a way similar to a file cabinet. You put all your pieces of paper in folders. Java puts classes in packages. These are logical groupings for classes.

We wouldn’t put you in front of a file cabinet and tell you to find a specific paper. Instead, we’d tell you which folder to look in. Java works the same way. It needs you to tell it which packages to look in to find code.

Suppose you try to compile this code:

```java
public class NumberPicker {
  public static void main(String[] args) {
    Random r = new Random(); // DOES NOT COMPILE
    System.out.println(r.nextInt(10));
  }
}
```

The Java compiler helpfully gives you an error that looks like this:

```
error: cannot find symbol
```

This error could mean you made a typo in the name of the class. You double-check and discover that you didn’t. The other cause of this error is omitting a needed import statement. A statement is an instruction, and import statements tell Java which packages to look in for classes. Since you didn’t tell Java where to look for `Random`, it has no clue.

Trying this again with the import allows the code to compile.

```java
import java.util.Random; // import tells us where to find Random
public class NumberPicker {
  public static void main(String[] args) {
    Random r = new Random();
    System.out.println(r.nextInt(10)); // a number 0-9
  }
}
```

Now the code runs; it prints out a random number between 0 and 9. Just like arrays, Java likes to begin counting with 0.

In Chapter 5, we cover another type of import referred to as a static import. It allows you to make static members of a class known, often so you can use variables and method names without having to keep specifying the class name.

#### Packages

As you saw in the previous example, Java classes are grouped into packages. The import statement tells the compiler which package to look in to find a class. This is similar to how mailing a letter works. Imagine you are mailing a letter to 123 Main Street, Apartment 9. The mail carrier first brings the letter to 123 Main Street. Then the carrier looks for the mailbox for apartment number 9. The address is like the package name in Java.

The apartment number is like the class name in Java. Just as the mail carrier only looks at apartment numbers in the building, Java only looks for class names in the package.

Package names are hierarchical like the mail as well. The postal service starts with the top level, looking at your country first. You start reading a package name at the beginning too. For example, if it begins with `java`, this means it came with the JDK. If it starts with something else, it likely shows where it came from using the website name in reverse. For example, `com.wiley.javabook` tells us the code is associated with the wiley.com website or organization. After the website name, you can add whatever you want. For example, `com.wiley.java.my.name` also came from wiley.com. Java calls more detailed packages child packages. The package `com.wiley.javabook` is a child package of `com.wiley`. You can tell because it’s longer and thus more specific.

You’ll see package names on the exam that don’t follow this convention. Don’t be surprised to see package names like `a.b.c`. The rule for package names is that they are mostly letters or numbers separated by periods (`.`). Technically, you’re allowed a couple of other characters between the periods (`.`). You can even use package names of websites you don’t own if you want to, such as `com.wiley`, although people reading your code might be confused! The rules are the same as for variable names, which you see later in this chapter. The exam may try to trick you with invalid variable names. Luckily, it doesn’t try to trick you by giving invalid package names.

#### Wildcards

Classes in the same package are often imported together. You can use a shortcut to import all the classes in a package.

```java
import java.util.*; // imports java.util.Random among other things
public class NumberPicker {
  public static void main(String[] args) {
    Random r = new Random();
    System.out.println(r.nextInt(10));
  }
}
```

In this example, we imported `java.util.Random` and a pile of other classes. The `*` is a wildcard that matches all classes in the package. Every class in the `java.util` package is available to this program when Java compiles it. The import statement doesn’t bring in child packages, fields, or methods; it imports only classes directly under the package. Let’s say you wanted to use the class `AtomicInteger` (you learn about that one in Chapter 13, “Concurrency”) in the `java.util.concurrent.atomic` package. Which import or imports support this?

- `import java.util.*;`
- `import java.util.concurrent.*;`
- `import java.util.concurrent.atomic.*;`

Only the last import allows the class to be recognized because child packages are not included with the first two.

You might think that including so many classes slows down your program execution, but it doesn’t. The compiler figures out what’s actually needed. Which approach you choose is personal preference—or team preference, if you are working with others on a team. Listing the classes used makes the code easier to read, especially for new programmers. Using the wildcard can shorten the import list. You’ll see both approaches on the exam.

#### Redundant Imports

Wait a minute! We’ve been referring to `System` without an import every time we printed text, and Java found it just fine. There’s one special package in the Java world called `java.lang`. This package is special in that it is automatically imported. You can type this package in an import statement, but you don’t have to. In the following code, how many of the imports do you think are redundant?

```java
1: import java.lang.System;
2: import java.lang.*;
3: import java.util.Random;
4: import java.util.*;
5: public class NumberPicker {
6:  public static void main(String[] args) {
7:    Random r = new Random();
8:    System.out.println(r.nextInt(10));
9:  }
10: }
```

The answer is that three of the imports are redundant. Lines 1 and 2 are redundant because everything in `java.lang` is automatically imported. Line 4 is also redundant in this example because `Random` is already imported from `java.util.Random`. If line 3 wasn’t present, `java.util.*` wouldn’t be redundant, though, since it would cover importing `Random`.

Another case of redundancy involves importing a class that is in the same package as the class importing it. Java automatically looks in the current package for other classes.

Let’s take a look at one more example to make sure you understand the edge cases for imports. For this example, `Files` and `Paths` are both in the package `java.nio.file`. The exam may use packages you may never have seen before. The question will let you know which package the class is in if you need to know that in order to answer the question. Which import statements do you think would work to get this code to compile?

```java
public class InputImports {
  public void read(Files files) {
    Paths.get("name");
  }
}
```

There are two possible answers. The shorter one is to use a wildcard to import both at the same time.

```java
import java.nio.file.*;
```

The other answer is to import both classes explicitly.

```java
import java.nio.file.Files;
import java.nio.file.Paths;
```

Now let’s consider some imports that don’t work.

```java
import java.nio.*; // NO GOOD - a wildcard only matches class names, not "file.Files"
import java.nio.*.*; // NO GOOD - you can only have one wildcard and it must be at the end
import java.nio.file.Paths.*; // NO GOOD - you cannot import methods, only class names
```
